using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using keepr.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class KeepsController : ControllerBase
  {
    private readonly KeepRepository _repo;
    public KeepsController(KeepRepository repo)
    {
      _repo = repo;
    }

    // GET public keeps - api/keeps
    [HttpGet]
    public ActionResult<IEnumerable<Keep>> Get()
    {
      try
      {
        return Ok(_repo.GetALL());
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    // GET keeps by logged in user - api/keeps/user
    [Authorize]
    [HttpGet("user")]
    //like bugreport 
    public ActionResult<Keep> GetUserKeeps()
    {
      try
      {
        var id = HttpContext.User.FindFirstValue("UserId");
        return Ok(_repo.GetByUser(id)); //returns a list of type keep from db query
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    //GET keep by Id - api/keeps/:keepId
    [HttpGet("{id}")]
    public ActionResult<Keep> GetKeep(int id)
    {
      try
      {
        return Ok(_repo.GetKeepById(id));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    // POST api/keeps
    [Authorize]
    [HttpPost]
    public ActionResult<Keep> Post([FromBody] Keep value)
    {
      value.UserId = HttpContext.User.FindFirstValue("Id");
      if (value.UserId != null)
      {
        return Ok(_repo.Create(value));
      }
      return BadRequest();
    }

    // PUT api/keeps/5
    [HttpPut("{id}")]
    public ActionResult<Keep> Put(int id, [FromBody] Keep value)
    {
      try
      {
        value.Id = id;
        return Ok(_repo.Update(value));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    // DELETE api/keeps/5
    [HttpDelete("{id}")]
    public ActionResult<String> Delete(int id)
    {
      try
      {
        return Ok(_repo.Delete(id));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }
  }
}