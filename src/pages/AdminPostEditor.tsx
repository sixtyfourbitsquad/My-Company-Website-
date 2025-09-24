import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Save, 
  Eye, 
  ArrowLeft, 
  Upload, 
  X, 
  Tag, 
  Globe,
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: string;
  status: 'draft' | 'published';
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

const AdminPostEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [post, setPost] = useState<BlogPost>({
    title: '',
    excerpt: '',
    content: '',
    author: 'Adswadi Team',
    status: 'draft',
    tags: [],
    metaTitle: '',
    metaDescription: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'content' | 'seo'>('content');

  useEffect(() => {
    if (isEditing && id) {
      fetchPost(parseInt(id));
    }
  }, [id, isEditing]);

  const fetchPost = async (postId: number) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`http://localhost:5000/api/blog/admin/${postId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const postData = response.data;
      setPost(postData);
      
      if (postData.featuredImage) {
        setImagePreview(`http://localhost:5000${postData.featuredImage}`);
      }
    } catch (error: any) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        navigate('/admin/login');
        toast.error('Session expired. Please login again.');
      } else {
        toast.error('Failed to fetch post');
        navigate('/admin/dashboard');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview('');
    setPost(prev => ({ ...prev, featuredImage: '' }));
  };

  const addTag = () => {
    if (tagInput.trim() && !post.tags.includes(tagInput.trim())) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  const handleSave = async (status: 'draft' | 'published') => {
    if (!post.title.trim() || !post.content.trim()) {
      toast.error('Title and content are required');
      return;
    }

    setIsSaving(true);

    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      
      // Add post data
      formData.append('title', post.title);
      formData.append('excerpt', post.excerpt);
      formData.append('content', post.content);
      formData.append('author', post.author);
      formData.append('status', status);
      formData.append('tags', JSON.stringify(post.tags));
      formData.append('metaTitle', post.metaTitle || post.title);
      formData.append('metaDescription', post.metaDescription || post.excerpt);

      // Add image if selected
      if (imageFile) {
        formData.append('featuredImage', imageFile);
      }

      let response;
      if (isEditing) {
        response = await axios.put(`http://localhost:5000/api/blog/${id}`, formData, {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        response = await axios.post('http://localhost:5000/api/blog', formData, {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      }

      toast.success(`Post ${isEditing ? 'updated' : 'created'} successfully`);
      navigate('/admin/dashboard');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || `Failed to ${isEditing ? 'update' : 'create'} post`;
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="mr-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900">
                {isEditing ? 'Edit Post' : 'New Post'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleSave('draft')}
                disabled={isSaving}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
              >
                Save Draft
              </button>
              <button
                onClick={() => handleSave('published')}
                disabled={isSaving}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isSaving ? 'Publishing...' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white rounded-lg shadow p-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={post.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter post title..."
                required
              />
              {post.title && (
                <p className="mt-2 text-sm text-gray-500">
                  Slug: {generateSlug(post.title)}
                </p>
              )}
            </div>

            {/* Excerpt */}
            <div className="bg-white rounded-lg shadow p-6">
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={post.excerpt}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of the post..."
              />
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex">
                  <button
                    onClick={() => setActiveTab('content')}
                    className={`py-2 px-4 border-b-2 font-medium text-sm ${
                      activeTab === 'content'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <FileText className="w-4 h-4 inline mr-2" />
                    Content
                  </button>
                  <button
                    onClick={() => setActiveTab('seo')}
                    className={`py-2 px-4 border-b-2 font-medium text-sm ${
                      activeTab === 'seo'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Globe className="w-4 h-4 inline mr-2" />
                    SEO
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'content' && (
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                      Content *
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={post.content}
                      onChange={handleInputChange}
                      rows={20}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                      placeholder="Write your post content here... You can use HTML tags for formatting."
                      required
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      You can use HTML tags for formatting (h2, h3, p, ul, li, strong, em, etc.)
                    </p>
                  </div>
                )}

                {activeTab === 'seo' && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        id="metaTitle"
                        name="metaTitle"
                        value={post.metaTitle}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="SEO title for search engines..."
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        {post.metaTitle.length}/60 characters
                      </p>
                    </div>

                    <div>
                      <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description
                      </label>
                      <textarea
                        id="metaDescription"
                        name="metaDescription"
                        value={post.metaDescription}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="SEO description for search engines..."
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        {post.metaDescription.length}/160 characters
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Featured Image</h3>
              
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Featured"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ImageIcon className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>

            {/* Post Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Post Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={post.author}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={post.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
              
              <div className="space-y-3">
                <div className="flex">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Add a tag..."
                  />
                  <button
                    onClick={addTag}
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                  >
                    <Tag className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 text-blue-600 hover:text-blue-800"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostEditor;
