using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
  public class VaultKeepsRepository
  {
    private readonly IDbConnection _db;
    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }
    //GET
    public IEnumerable<Keep> GetVKByVaultId(int id)
    {
      string query = @"
         SELECT * FROM vaultkeeps vk
         INNER JOIN keeps k ON k.id = vk.keepId
         WHERE vaultId = @id;
         ";
      return _db.Query<Keep>(query, new { id });
    }

    //POST
    public VaultKeeps Create(VaultKeeps value)
    {
      string query = @"
      INSERT INTO vaultkeeps (vaultId, keepId, userId)
          VALUES (@VaultId, @KeepId, @UserId);
          SELECT LAST_INSERT_ID();
        ";
      int id = _db.ExecuteScalar<int>(query, value);
      value.Id = id;
      return value;
    }
    //Delete/put request
    public string Delete(VaultKeeps value)
    {
      string query = "DELETE FROM vaultkeeps WHERE (vaultId = @VaultId AND keepId = @KeepId AND userId = @UserId)";
      int changedRows = _db.Execute(query, value);
      if (changedRows < 1) throw new Exception("Invalid Id");
      return "Successfully deleted";
    }
  }
}
