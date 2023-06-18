FROM eclipse-temurin:17-jdk-alpine
EXPOSE 8080
CMD ["mvnw", "install"]

ADD target/muueit-0.0.1.jar muueit-0.0.1.jar
ENTRYPOINT ["java","-jar","/muueit-0.0.1.jar"]