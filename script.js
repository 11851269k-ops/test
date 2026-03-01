* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

body {
  background: #fff;
  color: #000;
}

/* header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 60px;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  font-size: 32px;
  font-weight: normal;
}

.nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #000;
  font-size: 14px;
}

/* gallery */
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 60px;
}

.card {
  background: #f0f0f0;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
}

.card:hover {
  background: #e5e5e5;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.card span {
  color: #777;
  font-size: 14px;
}
