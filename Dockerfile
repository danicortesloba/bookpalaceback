FROM debian:bullseye-slim

RUN apt update 
RUN apt install -y curl
RUN apt install -y unzip
RUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno
COPY . .

EXPOSE 8000

ENTRYPOINT ["deno"]
CMD ["run", "--allow-net", "--allow-read", "src/index.ts"]
