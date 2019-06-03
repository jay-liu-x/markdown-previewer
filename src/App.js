import React from 'react';
import './App.css';
import marked from 'marked';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        // the initial text shown at editor
      markdown: '' +
          '# header 1 \n \n' +
          '**bold** \n \n' +
          '*italics* \n \n' +
          '- list item 1 \n \n' +
          '- list item 2 \n \n' +
          '[This is a link](www.google.com) \n \n' +
          '`print("hello world")`'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.setState({
          markdown: e.target.value
      })
  }

  render() {
    return (
        <div>
          <h1>Markdown<img alt={'markdown-img'} src={'md_img.png'} /> Previewer</h1>
          <div className='container'>
            <div className='left'>
              <textarea id='editor' value={this.state.markdown} onChange={this.handleChange} />
            </div>
            <div className='right'>
              <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
