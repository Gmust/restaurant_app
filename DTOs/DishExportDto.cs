namespace RestaurantApp.DTOs;

public class DishExportDto
{
  public int DishId { get; set; }
  public string Name { get; set; }
  public decimal Price { get; set; }
  public string? Description { get; set; }
  public string? ImagePath { get; set; }
}