version: "3.9"
services:
    web:
        build: .
        ports:
            - "8000:80"
        depends_on:
            - db
    db:
        image: "mcr.microsoft.com/mssql/server:2019-latest"
        environment:
            SA_PASSWORD: "voyoupass!1"
            ACCEPT_EULA: "Y"