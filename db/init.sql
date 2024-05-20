CREATE TABLE users (
    usu_id SERIAL PRIMARY KEY,
    usu_cod INTEGER NOT NULL UNIQUE,
    usu_name TEXT NOT NULL,
    usu_nickname TEXT NOT NULL,
    usu_email TEXT NOT NULL UNIQUE,
    usu_phone TEXT NOT NULL,
    usu_salt TEXT NOT NULL,
    usu_password TEXT NOT NULL,
    usu_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE followers (
    follow_follower_id INTEGER NOT NULL,
    follow_followed_id INTEGER NOT NULL,
    follow_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (follow_follower_id) REFERENCES users(usu_cod),
    FOREIGN KEY (follow_followed_id) REFERENCES users(usu_cod)
);

CREATE TABLE categories (
    cat_id SERIAL PRIMARY KEY,
    cat_title TEXT NOT NULL,
    cat_description TEXT,
    cat_icon TEXT,
    cat_prefix TEXT NOT NULL,
    cat_created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    post_title TEXT NOT NULL,
    post_subtitle TEXT,
    post_content TEXT NOT NULL,
    post_author_id INTEGER NOT NULL,
    post_anexo TEXT,
    post_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    post_category_id INTEGER NOT NULL,
    post_active BOOLEAN NOT NULL DEFAULT TRUE,
    post_view_count INTEGER DEFAULT 0,
    post_topic_id INTEGER,
    FOREIGN KEY (post_author_id) REFERENCES users(usu_id),
    FOREIGN KEY (post_category_id) REFERENCES categories(cat_id)
);

CREATE TABLE topics (
    top_id SERIAL PRIMARY KEY,
    top_title TEXT NOT NULL,
    top_user_id INTEGER NOT NULL,
    top_category_id INTEGER NOT NULL,
    top_created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    top_last_post_id INTEGER,
    FOREIGN KEY (top_user_id) REFERENCES users(usu_id),
    FOREIGN KEY (top_category_id) REFERENCES categories(cat_id),
    FOREIGN KEY (top_last_post_id) REFERENCES posts(post_id)
);



CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    comment_id_dad INTEGER,
    comment_post_id INTEGER NOT NULL,
    comment_user_id INTEGER NOT NULL,
    comment_like INTEGER DEFAULT 0,
    comment_deslike INTEGER DEFAULT 0,
    comment_anexo TEXT, 
    comment_content TEXT NOT NULL,
    comment_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    comment_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (comment_post_id) REFERENCES posts(post_id),
    FOREIGN KEY (comment_id_dad) REFERENCES comments(comment_id),
    FOREIGN KEY (comment_user_id) REFERENCES users(usu_id)
);

CREATE TABLE tags (
    tag_id SERIAL PRIMARY KEY,
    tag_name TEXT NOT NULL UNIQUE,
    tag_description TEXT
);
CREATE TABLE post_tags (
    post_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    PRIMARY KEY (post_id, tag_id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id)
);
CREATE TABLE topic_tags (
    topic_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    PRIMARY KEY (topic_id, tag_id),
    FOREIGN KEY (topic_id) REFERENCES topics(top_id),
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id)
);

CREATE TABLE private_messages (
    pvm_message_id SERIAL PRIMARY KEY,
    pvm_sender_id INTEGER NOT NULL,
    pvm_receiver_id INTEGER NOT NULL,
    pvm_content TEXT NOT NULL,
    pvm_sent_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    pvm_read BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (pvm_sender_id) REFERENCES users(usu_id),
    FOREIGN KEY (pvm_receiver_id) REFERENCES users(usu_id)
);
