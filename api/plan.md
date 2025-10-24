🧱 1. Veritabanı Şeması (SQL)
users
alan	tip	açıklama
id	BIGINT PK	kullanıcı kimliği
phone_number	VARCHAR(20) UNIQUE	giriş için kullanılacak numara
password_hash	VARCHAR(255)	hashlenmiş şifre
alias	VARCHAR(50)	kullanıcı takma adı
tag	VARCHAR(10)	örn: #1234
created_at	DATETIME	kayıt tarihi
last_active	DATETIME	son aktif zaman
location_lat	DECIMAL(10,8)	latitude
location_lon	DECIMAL(11,8)	longitude
is_banned	BOOLEAN	genel ban durumu
is_premium	BOOLEAN	premium üyelik durumu
daily_chat_balance	INT	günlük yazılı eşleşme hakkı
daily_video_balance	INT	günlük video eşleşme hakkı
subscriptions
alan	tip	açıklama
id	BIGINT PK	
user_id	FK users(id)	
plan_name	VARCHAR(50)	
start_date	DATETIME	
end_date	DATETIME	
is_active	BOOLEAN	
matches
alan	tip	açıklama
id	BIGINT PK	
user1_id	FK users(id)	
user2_id	FK users(id)	
type	ENUM('text','video')	
created_at	DATETIME	
expired_at	DATETIME	
status	ENUM('active','expired','cancelled','completed')	
messages
alan	tip	açıklama
id	BIGINT PK	
match_id	FK matches(id)	
sender_id	FK users(id)	
receiver_id	FK users(id)	
content	TEXT (uçtan uca şifrelenmiş)	
created_at	DATETIME	

Mesajlar belirli süre sonra (örneğin 24h) silinir ama…

message_logs
alan	tip	açıklama
id	BIGINT PK	
sender_id	FK users(id)	
receiver_id	FK users(id)	
match_id	FK matches(id)	
sent_at	DATETIME	
delivered	BOOLEAN	
device_info	VARCHAR(255)	
connection_type	ENUM('text','video')	

Bu tablo claim sistemi, istatistik ve abuse takibi** için tutulur.
Örneğin: 2 saat içinde cevap gelmeyen eşleşmeler buradan hesaplanabilir.

claims
alan	tip	açıklama
id	BIGINT PK	
user_id	FK users(id)	
match_id	FK matches(id)	
claim_time	DATETIME	
status	ENUM('pending','approved','rejected')	
processed_at	DATETIME	

2 saat boyunca mesaj yoksa kullanıcı bu tabloya bir “claim” atar.
Backend cron job ile 1-2 dakikada bir kontrol eder, hak iadesi yapar.

blocks
alan	tip	açıklama
id	BIGINT PK	
blocker_id	FK users(id)	
blocked_id	FK users(id)	
created_at	DATETIME	
reports
alan	tip	açıklama
id	BIGINT PK	
reporter_id	FK users(id)	
reported_id	FK users(id)	
reason	TEXT	
created_at	DATETIME	

Aynı kullanıcıya 10 farklı rapor → otomatik ban triggerı.

ads
alan	tip	açıklama
id	BIGINT PK	
title	VARCHAR(100)	
content	TEXT	
target_group	VARCHAR(50)	
active	BOOLEAN	
created_at	DATETIME	
notifications
alan	tip	açıklama
id	BIGINT PK	
user_id	FK users(id)	
message	TEXT	
type	ENUM('system','match','claim','ad')	
created_at	DATETIME	
read	BOOLEAN	
referrals
alan	tip	açıklama
id	BIGINT PK	
inviter_phone	VARCHAR(20)	
invited_phone	VARCHAR(20)	
created_at	DATETIME	
reward_given	BOOLEAN	

Davetle gelen kullanıcıya +10 günlük eşleşme hakkı verilir.

system_logs
alan	tip	açıklama
id	BIGINT PK	
action	VARCHAR(255)	
user_id	FK users(id)	
details	TEXT	
created_at	DATETIME	
⚙️ 2. Kullanılacak Teknolojiler
Katman	Teknoloji
Backend	Node.js (Express.js)
Veritabanı	PostgreSQL
Realtime / Chat	Socket.io
Video Görüşme	WebRTC + PeerJS / Twilio SDK (başlangıç için WebRTC)
Authentication	JWT (login + session)
Password Hash	bcrypt
Deployment	Docker + Nginx Reverse Proxy
Background Tasks	BullMQ + Redis
Logging	Winston + PostgreSQL system_logs
Notification Queue	Firebase Cloud Messaging (mobil için)


🧩 4. Öne Çıkan Özellikler

Telefon numarası + şifreyle giriş

Alias + tag sistemi (örnek: kediadam#9021)

Anonim eşleşme (text & video)

Günlük eşleşme limiti + claim sistemi

Referral bonusu (arkadaş daveti)

Engelleme / raporlama / oto-ban

Uçtan uca şifreli mesajlaşma

Log tabanlı denetim ve hak iadesi

Sistem bildirimleri & reklam gösterimi

Arka plan job sistemi (claim & report kontrolü)