using Xunit;
using Microsoft.AspNetCore.Mvc;
using TrabajoClase.Controllers;

public class HelloControllerTests
{
    [Fact]
    public void Get_ReturnsHelloMessage()
    {
        // Arrange
        var controller = new HelloController();

        // Act
        var result = controller.Get() as OkObjectResult;

        // Assert
        Assert.NotNull(result);
        Assert.Equal("Hello, SonarQube!", result.Value);
    }
}