import { useState, useEffect } from 'react';
const URL_RANDOM_AVATAR = 'https://api.dicebear.com/9.x/lorelei/svg';
 
const styles = {
  card: {
    width: '350px',
    height: '400px',
    backgroundColor: '#E4F9F5',
    padding: '5px',
    borderRadius: '10px',
    textAlign: 'center'
  },
  avatarImage: {
    width: '150px',
    height: '150px',
  },
  description: {
    fontSize: '14px',
    textAlign: 'left',
    color: '#000000',
  },
  numberImage: {
    fontSize: '12px',
    color: '#555'
  }
};

export function Cards() {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchRandomAvatar();
  }, []);

  const fetchRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setAvatarUrl(`${URL_RANDOM_AVATAR}/${randomNumber}.svg?${Date.now()}`);
    setDescription(`Avatar ${randomNumber}`);
  };
  return (
    <div style={styles.card}>
      <h1>Random Image</h1>
      <img
        style={styles.avatarImage}
        src={avatarUrl}
        alt="Card"
        onClick={fetchRandomAvatar}
      />
      <hr style={{ margin: '5px 0' }} />
      <h3 style={{ textAlign: 'left' }}>Descripción:</h3>
      <p style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p style={styles.numberImage}>{description}</p>
    </div>
  );
}
