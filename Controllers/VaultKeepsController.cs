using System;
using System.Collections.Generic;
using System.Security.Claims;
using keepr.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class VaultKeepsController : ControllerBase
  {
    private readonly VaultKeepsRepository _repo;
    public VaultKeepsController(VaultKeepsRepository repo)
    {
      _repo = repo;
    }
    //GET /vaultkeeps/:vaultId
    [HttpGet("{:vaultId}")]
    public ActionResult<IEnumerable<Keep>> GetVKByVaultId(int id)
    {
      try
      {
        return Ok(_repo.GetVKByVaultId(id));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }
    //POST /vaultkeeps
    [HttpPost]
    public ActionResult<VaultKeeps> Post([FromBody] VaultKeeps value)
    {
      try
      {
        value.UserId = HttpContext.User.FindFirstValue("Id");
        return Ok(_repo.Create(value));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }
    //DELETE vaultkeeps
    [Authorize]
    [HttpPut]
    public ActionResult<String> Put([FromBody] VaultKeeps value)
    {
      try
      {
        string userId = HttpContext.User.FindFirstValue("Id");
        value.UserId = userId;
        return Ok(_repo.Delete(value));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }
  }
}