const title = "Donde Lucas";
const email = "sanchezrodriguezcarmen9@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información sobre los materiales de construcción que ofrecen. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3125448057";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Donde Lucas es tu destino confiable para la compra de materiales de construcción como cemento, tubería y mucho más. Desde nuestro inicio, nos hemos comprometido a proporcionar productos de la más alta calidad, garantizando que cada compra cumpla con los estándares más exigentes.",
        description2: "Nuestro objetivo es ofrecer soluciones completas para tus proyectos de construcción y remodelación, con productos que aseguren durabilidad y rendimiento. Trabajamos con proveedores de confianza para garantizar que cada producto que ofrecemos cumpla con las especificaciones y requisitos que necesitas.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Cumplimiento y calidad en nuestros productos",
            p2: "Tu aliado en la construcción",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565696277822&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
