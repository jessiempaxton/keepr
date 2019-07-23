using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Controllers
{
  public class KeepRepository
  {
    private readonly IDbConnection _db;
    public KeepRepository(IDbConnection db)
    {
      _db = db;
    }

    public IEnumerable<Keep> GetALL()
    {
      return _db.Query<Keep>("SELECT * FROM keeps");
    }

    public IEnumerable<Keep> GetByUser(string id)
    {
      return _db.Query<Keep>("SELECT * FROM keeps WHERE userId = @Id");
    }

    public Keep GetById(int id)
    {
      string query = "SELECT * FROM keeps WHERE id = @id";
      Keep data = _db.QueryFirstOrDefault<Keep>(query, new { id });
      if (data == null) throw new Exception("Invalid Id");
      return data;
    }


    public Keep Create(Keep value)
    {
      string query = @"
            INSERT INTO keeps (name, description, userId, isPrivate, views, keeps)
                    VALUES (@Name, @Description, @UserId, @IsPrivate, @Views, @Keeps);
                    SELECT LAST_INSERT_ID();
            ";
      int id = _db.ExecuteScalar<int>(query, value);
      value.Id = id;
      return value;
    }

    public Keep Update(Keep value)
    {
      string query = @"
            UPDATE keeps
            SET
                name = @Name,
                description = @Description,
                img = @Img,
                isPrivate = @IsPrivate
            WHERE id = @Id;            
            SELECT * FROM keeps WHERE id = @Id;
            ";
      return _db.QueryFirstOrDefault<Keep>(query, value);
    }

    public string Delete(int id)
    {
      string query = "DELETE FROM keeps WHERE id = @Id";
      int changedRows = _db.Execute(query, new { id });
      if (changedRows < 1) throw new Exception("Invalid Id");
      return "Successfully deleted Keep";

    }
  }
}