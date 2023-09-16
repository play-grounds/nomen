import { html } from '../js/standalone.module.js'

const sidebarStyle = {
  position: 'fixed',
  width: '200px',
  height: '100%',
  backgroundColor: '#0048a4',
  overflow: 'auto',
  paddingTop: '20px'
}

const sidebarLinkStyle = {
  display: 'block',
  color: 'rgb(232, 232, 232)',
  padding: '10px',
  textDecoration: 'none',
  fontFamily: 'Gotham',
  fontSize: '14px',
  fontWeight: '500'
}

const sidebarLinkHoverStyle = {
  backgroundColor: '#ddd',
  color: 'black'
}

const Sidebar = ({ links = [] }) => {
  if (links.length === 0) {
    // links = [
    //   { '@id': '#home', label: 'Home' },
    //   { '@id': '#about', label: 'About' },
    //   { '@id': '#contact', label: 'Nostr' }
    // ]

    links = [
      { '@id': '#overview', label: 'Overview' }
    ]
  }

  return html`
    <div style=${sidebarStyle}>
      ${links.map(link => html`
        <a href=${link['@id']} style=${sidebarLinkStyle} onMouseOver=${sidebarLinkHoverStyle}>${link.label}</a>
      `)}
    </div>
  `
}

export default Sidebar
