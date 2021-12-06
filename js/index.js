(function () {
    const buildLogos = function(logoSelector, logoUrl, logoImageAlt) {
        document.querySelectorAll(`.${logoSelector}`)
                .forEach(logo => {
                    console.log(logo);
                    logo.innerHTML =
                        `<a href="${logoUrl}" target="_blank" rel="noopener noreferrer">
                            <img alt="${logoImageAlt}" class="logo">
                        </a>`;
                });
    }


    // Build all logos
    buildLogos("grid-item-java-logo", "https://java.com", "Java logo");
    buildLogos("grid-item-spring-logo", "https://spring.io/", "Spring logo");
    buildLogos("grid-item-javafx-logo", "https://openjfx.io/", "JavaFX logo");
    buildLogos("grid-item-cpp-logo", "https://isocpp.org/", "C++ logo");
    buildLogos("grid-item-cs-logo", "https://docs.microsoft.com/en-us/dotnet/csharp/", "C# logo");
    buildLogos("grid-item-docker-logo", "https://www.docker.com/", "Docker logo");
    buildLogos("grid-item-hbn-logo", "https://hibernate.org/", "Hibernate");
    buildLogos("grid-item-jpa-logo", "https://jakarta.ee/specifications/persistence/", "JPA logo");
    buildLogos("grid-item-jasper-logo", "https://community.jaspersoft.com/project/jasperreports-library", "JasperReports logo");
    buildLogos("grid-item-aws-logo", "https://aws.amazon.com/", "AWS logo");
    buildLogos("grid-item-jsf-logo", "https://jakarta.ee/specifications/faces/", "JSF logo");
    buildLogos("grid-item-prime-logo", "https://www.primefaces.org/", "PrimeFaces logo");
    buildLogos("grid-item-gha-logo", "https://github.com/features/actions", "GitHub Actions logo");
    buildLogos("grid-item-node-logo", "https://nodejs.org/", "NodeJS logo");
    buildLogos("grid-item-spark-logo", "http://sparkjava.com/", "Spark logo");
    buildLogos("grid-item-go-logo", "https://go.dev", "Golang logo");
})();