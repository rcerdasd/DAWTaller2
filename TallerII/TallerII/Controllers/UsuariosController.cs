using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TallerII.Context;
using TallerII.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TallerII.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly AppDbContext context;

        public UsuariosController(AppDbContext context)
        {
            this.context = context;
        }
        // GET: api/<UsuariosController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.Usuarios.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<UsuariosController>/5
        [HttpGet("{id}", Name ="ObtenerUsuario")]
        public ActionResult Get(int id)
        {

            try
            {
                //var usuario = context.Usuarios.FirstOrDefault(r => r.Cod_Usuario==id);
                var usuario = context.Usuarios.Find(id);
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        
        // POST api/<UsuariosController>
        [HttpPost]
        public ActionResult Post([FromBody]Usuarios usuario)
        {
            try
            {
                context.Usuarios.Add(usuario);
                context.SaveChanges();
                return CreatedAtRoute("ObtenerUsuario", new{id = usuario.Cod_Usuario}, usuario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            

        }

        // PUT api/<UsuariosController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Usuarios usuario)
        {
            try
            {
                if (usuario.Cod_Usuario == id)
                {
                    context.Entry(usuario).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute("ObtenerUsuario", new { id = usuario.Cod_Usuario }, usuario);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        // DELETE api/<UsuariosController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
