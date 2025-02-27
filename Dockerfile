# Вказуємо базовий образ
FROM node:20 AS build

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install --frozen-lockfile

# Копіюємо решту файлів проєкту
COPY . .

# Збираємо застосунок
RUN npm run build

# Використовуємо легковаговий образ Nginx для розгортання
FROM nginx:alpine

# Копіюємо зібрані файли у кореневу директорію Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копіюємо файл конфігурації Nginx (опціонально)
# COPY nginx.conf /etc/nginx/nginx.conf

# Відкриваємо порт
EXPOSE 8080

# Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
