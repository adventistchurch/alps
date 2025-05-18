export const DeprecatedStyles = () => {

  return <div style={{
    border: '1px solid #f0ad4e',
    background: '#fff3cd',
    padding: '1em',
    borderRadius: '6px',
    fontSize: '15px',
    lineHeight: '1.5'
  }}>
    <p style={{ margin: 0 }}>
      ⚠️ <strong style={{ color: '#856404' }}>WARNING:</strong>
      <code>cdn.adventist.org</code> is <strong>deprecated</strong>!<br/>
      Please update your links to use the correct and current URLs for CSS and JS.
    </p>
    <p style={{ marginTop: '0.75em' }}>
      ✅ <strong>Use:</strong><br/>
      <code>https://alps.adventistcdn.org/wordpress/themes/alps/main.css</code><br/>
      <code>https://alps.adventistcdn.org/wordpress/themes/alps/head-script.min.js</code>
    </p>
  </div>;
}
