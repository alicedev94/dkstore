new Vue({el:"#app",vuetify:new Vuetify,data:()=>({dialog:!1,marcas:null,marca:[],Iespecial:!1,vista:{terminoC:!0,garantia:!1,pregunta:!1},preguntas:[{pregunta:"¿Donde puedo acudir para activar una garantía?",repuesta:"En todas nuestras sucursales a nivel nacional, a partir de las 8:00 am hasta el cierre de la tienda, cualquier día del año  o por el WhatsApp 0424-4624218, selecciona la opción (2) Garantía, Envíos y Servicio Técnico"},{pregunta:"¿Cómo puedo activar la garantía de mi producto instalado?",repuesta:"Una vez reportado y validada la información proporcionada por el cliente,  en un tiempo no máximo a 72 horas se le contactara y se enviará  un  técnico aliado a su domicilio para dar respuesta a la activación de la garantía."},{pregunta:"¿En cuanto tiempo tengo respuesta sobre mi caso, luego que se activo mi garantía?",repuesta:" Tiendas Daka tiene un tiempo estimado de cuatro  (4) a cinco (5) días hábiles para dar respuesta a la solicitud de activación de  garantía."},{pregunta:"¿Mi producto de Venta Especial (producto reacondicionado o con detalle) tiene cambio inmediato ?",repuesta:"Los productos de Venta Especial poseen Garantía Daka por el tiempo que indica la factura. Estos casos no son aplicables bajo la modalidad de cambio inmediato."},{pregunta:"¿Qué cosas  debo conservar mientras  la garantía de mi producto esta en vigencia ?",repuesta:"      Factura de compra Original,Caja del producto (aplica para línea hogar, marrón y digital) y   Accesorios partes y piezas.       "}],TerminoYCondiciones:[{nombre:"Mercancía de Venta Especial",imagen:"img/MD/especial.jpg",status:!1},{nombre:"Mercancía de Venta Ordinaria",imagen:"img/MD/normal.jpg",status:!1}],vista1:"card1",model:null}),computed:{},async mounted(){let a=await fetch("/producto/marca");a=await a.json(),this.marca=a,this.dialog=!0},methods:{Activ(a){console.log("corrio ",a);for(let a in this.vista)this.vista[a]=!1;console.log(this.vista),this.vista[a]=!0,console.log(this.vista)},eclick(a,e){a(),e.status?(console.log(e.status),e.status=!1,console.log(e.status)):(console.log(e.status),this.TerminoYCondiciones.forEach((a=>a.status=!1)),e.status=!0,console.log(e.status))}}});