using FirstCoreAngularTry.Models;
using FirstCoreAngularTry.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PortController : ControllerBase
    {
        private readonly IPortService _portService;

        public PortController(IPortService PortService)
        {
            _portService = PortService;
        }

        // GET: api/Ports
        [HttpGet]
        public async Task<IEnumerable<Port>> Get()
        {
            return await _portService.GetPortsList();
        }

        // GET: api/Ports/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Port>> Get(int id)
        {
            var port = await _portService.GetPortById(id);

            if (port == null)
            {
                return NotFound();
            }

            return Ok(port);
        }

        // POST: api/Ports
        [HttpPost]
        public async Task<ActionResult<Port>> Post(Port port)
        {
            await _portService.CreatePort(port);

            return CreatedAtAction("Post", new { id = port.Id }, port);
        }

        // PUT: api/Ports/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Port port)
        {
            if (id != port.Id)
            {
                return BadRequest("Not a valid Port id");
            }

            await _portService.UpdatePort(port);

            return NoContent();
        }

        // DELETE: api/Ports/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid Port id");

            var port = await _portService.GetPortById(id);
            if (port == null)
            {
                return NotFound();
            }
            await _portService.DeletePort(port);

            return NoContent();
        }
    }
}
