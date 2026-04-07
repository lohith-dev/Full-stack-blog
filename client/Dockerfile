# frontend/Dockerfile
# Stage 1: build
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

ARG VITE_CLERK_PUBLISHABLE_KEY
ARG VITE_IK_URL_ENDPOINT
ARG VITE_IK_PUBLIC_KEY

ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_IK_URL_ENDPOINT=$VITE_IK_URL_ENDPOINT
    ENV VITE_IK_PUBLIC_KEY=$VITE_IK_PUBLIC_KEY


# Debug output - this will show in build logs
RUN echo "=== DEBUG INFO ==="
RUN echo "ARG received: '$VITE_CLERK_PUBLISHABLE_KEY'"
RUN env | grep VITE || echo "No VITE vars found"
RUN echo "=================="

RUN npm run build

# Stage 2: serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]