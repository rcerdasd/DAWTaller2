using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TallerII.Models
{
    public class Usuarios
    {
        [Key]
        public int Cod_Usuario { get; set; }
        public string Nombre { get; set; }
        public string Pri_Ape { get; set; }
        public string Seg_Ape { get; set; }
        public string Login { get; set; }
        public string Pass { get; set; }
        public string Confirmar_Pass { get; set; }
        public string Telefono1 { get; set; }
        public string Telefono2 { get; set; }
        public bool Admin_Seg { get; set; }
        public bool Admin_Ad { get; set; }
    }
}
