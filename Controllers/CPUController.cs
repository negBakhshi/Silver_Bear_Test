using FirstCoreAngularTry.Models;
using FirstCoreAngularTry.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstCoreAngularTry.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CPUController : ControllerBase
    {
        private readonly ICPUService _cpuService;

        public CPUController(ICPUService CPUService)
        {
            _cpuService = CPUService;
        }

        // GET: api/CPUs
        [HttpGet]
        public async Task<IEnumerable<Cpu>> Get()
        {
            return await _cpuService.GetCPUsList();
        }

        // GET: api/CPUs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cpu>> Get(int id)
        {
            var cpu = await _cpuService.GetCPUById(id);

            if (cpu == null)
            {
                return NotFound();
            }

            return Ok(cpu);
        }

        // POST: api/CPUs
        [HttpPost]
        public async Task<ActionResult<Cpu>> Post(Cpu cpu)
        {
            await _cpuService.CreateCPU(cpu);

            return CreatedAtAction("Post", new { id = cpu.Id }, cpu);
        }

        // PUT: api/CPUs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Cpu cpu)
        {
            if (id != cpu.Id)
            {
                return BadRequest("Not a valid CPU id");
            }

            await _cpuService.UpdateCPU(cpu);

            return NoContent();
        }

        // DELETE: api/CPUs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid CPU id");

            var cpu = await _cpuService.GetCPUById(id);
            if (cpu == null)
            {
                return NotFound();
            }

            await _cpuService.DeleteCPU(cpu);

            return NoContent();
        }
    }
}