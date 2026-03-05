FROM node:20-alpine AS builder
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install -g pnpm@latest-10
RUN npm install -g vite
RUN npm install
RUN npm run build
 
FROM nginx:1.25-alpine AS runner
 
RUN rm -rf /usr/share/nginx/html/*
 
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
