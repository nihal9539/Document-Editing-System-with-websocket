import React from 'react'
import { DocumentEditorContainer,Toolbar } from '@syncfusion/ej2-documenteditor'
DocumentEditorContainer.Inject(Toolbar);
let documenteditor = new DocumentEditorContainer({ enableToolbar: true, height: '390px', serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' });


const Home = () => {
  return (
    <div>
      <DocumentEditorContainer >

      </DocumentEditorContainer>
    </div>
  )
}

export default Home
