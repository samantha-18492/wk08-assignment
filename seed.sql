CREATE TABLE blog_posts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT,
  img_url TEXT,
  author TEXT,
  created_at TEXT,
  content TEXT,
  recommended_films TEXT,
  prompt TEXT
);

INSERT INTO blog_posts (title, author, created_at, content, recommended_films, prompt) VALUES
('Day 7: Fear of Technology Turning Evil (Technophobia)', 'Samantha Parkes', '2025-10-07', 'Technology surrounds us, often making life easier, but what if it turned against us? From computers plotting against humans to AI caretakers going rogue, this fear reflects our anxieties about control, creation, and the unknown consequences of innovation.
Technophobia isn’t just a modern worry. Stories of clever machines turning evil have existed in literature and folklore for decades. Today, as AI, robotics, and automation grow, the fear is more immediate, but films allow us to explore it safely.', 'M3GAN (2023) – When AI caretakers go too far.
2001: A Space Odyssey (1968) – HAL 9000 proves even machines can have motives.
WALL-E (2008) – A lighter take, exploring technology’s influence without horror.
Margaux (2022) – The chilling consequences of AI blending with human desire.', 'Do machines make you uneasy, or are they more fascinating than frightening? Share your thoughts!')

..............................

CREATE TABLE blog_post_comments (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author TEXT,
  comment TEXT,
  post_id INT REFERENCES blog_posts(id)
);

INSERT INTO blog_post_comments (author, comment) VALUES ('Sarah', 'Just reading this made my palms sweat. I can’t even look over a balcony without feeling dizzy!')