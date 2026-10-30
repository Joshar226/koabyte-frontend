import type { IconType } from 'react-icons'
import {
  FiGlobe, FiSmartphone, FiMonitor, FiSearch, FiShield, FiZap,
  FiMessageCircle, FiMail, FiMapPin, FiTool,
} from 'react-icons/fi'

export const navLinks = [
  { id: 'inicio', label: 'Inicio', num: '01', hint: '' },
  { id: 'desarrollo', label: 'Desarrollo', num: '02', hint: 'Web, móvil, desktop' },
  { id: 'reparaciones', label: 'Reparaciones', num: '03', hint: 'Celular, laptop, PC', taller: true },
  { id: 'proceso', label: 'Proceso', num: '04', hint: '' },
  { id: 'contacto', label: 'Contacto', num: '05', hint: '' },
]

export const stats = [
  { title: 'Web', text: 'Sitios y tiendas' },
  { title: 'Móvil', text: 'iOS y Android' },
  { title: 'Desktop', text: 'Windows, macOS' },
]

export const services: {
  title: string; text: string; items: string[]; icon: IconType; featured?: boolean
}[] = [
  { title: 'Páginas web', icon: FiGlobe,
    text: 'Sitios corporativos, tiendas en línea y sistemas web que venden por ti.',
    items: ['Diseño responsive', 'SEO y velocidad', 'Panel administrable'] },
  { title: 'Aplicaciones móviles', icon: FiSmartphone, featured: true,
    text: 'Apps para iOS y Android con experiencia nativa y publicación en tiendas.',
    items: ['iOS y Android', 'Notificaciones push', 'Pagos integrados'] },
  { title: 'Apps de escritorio', icon: FiMonitor,
    text: 'Software para Windows y macOS: inventarios, punto de venta y gestión interna.',
    items: ['Windows y macOS', 'Funciona sin internet', 'Bases de datos locales'] },
]

export const repairBenefits: { icon: IconType; text: string; short: string }[] = [
  { icon: FiSearch, text: 'Diagnóstico gratuito', short: 'Diagnóstico gratuito' },
  { icon: FiShield, text: 'Garantía de 90 días', short: 'Garantía de 90 días' },
  { icon: FiZap, text: 'Reparaciones en 24 a 72 h', short: '24 a 72 h' },
]

export const repairs: { title: string; text: string; tags: string[]; icon: IconType }[] = [
  { title: 'Celulares', icon: FiSmartphone,
    text: 'Pantallas, baterías, puertos de carga y software.',
    tags: ['Pantalla', 'Batería', 'Puerto de carga'] },
  { title: 'Laptops', icon: FiMonitor,
    text: 'Teclados, pantallas, mantenimiento y mejoras de rendimiento.',
    tags: ['Pantalla', 'SSD y RAM', 'Limpieza'] },
  { title: 'PC de escritorio', icon: FiTool,
    text: 'Armado, actualización de piezas, virus y sistema operativo.',
    tags: ['Armado', 'Formateo', 'Upgrades'] },
]

export const steps = [
  { title: 'Descubrimiento', tag: 'Reunión gratuita',
    text: 'Escuchamos tu idea, definimos objetivos y te enviamos una cotización clara.' },
  { title: 'Diseño', tag: 'Prototipo interactivo',
    text: 'Creamos prototipos de pantallas para que veas tu producto antes de programarlo.' },
  { title: 'Desarrollo', tag: 'Entregas semanales',
    text: 'Programamos por etapas con avances semanales que puedes probar.' },
  { title: 'Lanzamiento', tag: 'Soporte continuo',
    text: 'Publicamos tu web o app y te acompañamos con soporte y mejoras.' },
]

export const contactInfo: { label: string; value: string; icon: IconType; href?: string; mobileHidden?: boolean }[] = [
  { label: 'WhatsApp', value: '+000 0000 0000', icon: FiMessageCircle, href: 'https://wa.me/0000000000', mobileHidden: true },
  { label: 'Correo', value: 'hola@koabyte.com', icon: FiMail, href: 'mailto:hola@koabyte.com' },
  { label: 'Taller', value: 'Tu dirección aquí', icon: FiMapPin },
]

export const projectTypes = ['Página web', 'App móvil', 'App desktop', 'Reparación']
