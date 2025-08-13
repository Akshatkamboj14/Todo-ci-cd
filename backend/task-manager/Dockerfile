# Stage 1: Build the application with Maven and JDK
FROM openjdk:17-jdk-alpine AS builder
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY src ./src
RUN ./mvnw package -DskipTests

# Stage 2: Create a lightweight final image with only the JRE
FROM openjdk:17-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
