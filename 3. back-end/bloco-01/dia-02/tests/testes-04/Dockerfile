FROM nginx
COPY ./index.html /usr/share/nginx/html
COPY ./static/ /usr/share/nginx/html
COPY ./asset-manifest.json /usr/share/nginx/html
COPY ./favicon.svg /usr/share/nginx/html
COPY ./logo192.png /usr/share/nginx/html
COPY ./logo512.png /usr/share/nginx/html
COPY ./manifest.json /usr/share/nginx/html
COPY ./robots.txt /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]