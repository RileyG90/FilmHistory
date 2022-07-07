using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MovieApp.EF.Migrations
{
    public partial class SecondaMigrazione : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "secret_comment",
                table: "comments");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "secret_comment",
                table: "comments",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
