import bcrypt from 'bcryptjs';

async function generateHash() {
  const password = 'admin123';
  const saltRounds = 10;
  
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log('Password:', password);
    console.log('Hash:', hash);
    
    // Test the hash
    const isValid = await bcrypt.compare(password, hash);
    console.log('Hash validation:', isValid);
    
    // Test against the existing hash
    const existingHash = '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';
    const isExistingValid = await bcrypt.compare(password, existingHash);
    console.log('Existing hash validation:', isExistingValid);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

generateHash();
