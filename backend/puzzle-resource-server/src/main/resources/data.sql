-- Categories
INSERT INTO categories (name) VALUES
('Animals'),
('Plants'),
('Objects');

-- Topics
INSERT INTO topics (name) VALUES
('Nature'),
('Family'),
('School');

-- Levels
INSERT INTO levels (name) VALUES
('Easy'),
('Medium'),
('Hard');

-- Languages
INSERT INTO languages (name) VALUES
('Vietnamese'),
('English');

-- Easy (2–4 ký tự)
INSERT INTO words (word, category_id, topic_id, level_id, language_id) VALUES
('mèo', 1, 1, 1, 1),
('cá', 1, 1, 1, 1),
('gà', 1, 1, 1, 1),
('hoa', 2, 1, 1, 1),
('cây', 2, 1, 1, 1),
('bút', 3, 3, 1, 1),
('xe', 3, 3, 1, 1),
('tủ', 3, 3, 1, 1),
('mưa', 2, 1, 1, 1),
('núi', 2, 1, 1, 1);

-- Medium (5–7 ký tự)
INSERT INTO words (word, category_id, topic_id, level_id, language_id) VALUES
('con chó', 1, 1, 2, 1),
('con hổ', 1, 1, 2, 1),
('bông hoa', 2, 1, 2, 1),
('quả cam', 2, 1, 2, 1),
('cái bàn', 3, 3, 2, 1),
('quyển vở', 3, 3, 2, 1),
('cái ghế', 3, 3, 2, 1),
('bài học', 3, 3, 2, 1),
('con nai', 1, 1, 2, 1),
('cái bút', 3, 3, 2, 1);

-- Hard (≥ 8 ký tự)
INSERT INTO words (word, category_id, topic_id, level_id, language_id) VALUES
('bánh chưng', 3, 3, 3, 1),
('máy lạnh', 3, 3, 3, 1),
('điều hòa', 3, 3, 3, 1),
('con khỉ đột', 1, 1, 3, 1),
('trái dứa', 2, 1, 3, 1),
('núi lửa', 2, 1, 3, 1),
('cầu vồng', 2, 1, 3, 1),
('ngựa vằn', 1, 1, 3, 1),
('máy tính', 3, 3, 3, 1),
('quạt điện', 3, 3, 3, 1);

