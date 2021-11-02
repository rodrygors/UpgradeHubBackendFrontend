#Image that we are using
FROM openjdk:11
ADD target/project-0.0.1-SNAPSHOT.jar project.jar
#EXPOSE 8080
ENTRYPOINT ["java", "-jar", "project.jar"]