import * as React from 'react';
import { useEffect } from 'react';
import { registerLicense } from '@syncfusion/ej2-base';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
import {useNavigate } from 'react-router-dom';


function Previewer(props) {
    
    registerLicense('Mgo+DSMBPh8sVXJ0S0V+XE9BcFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSd0ZjWH5aeXFSRWNZVg==');
    let navigate = useNavigate()
    let documentLoad=async (arg) =>{
        props.setLoading(true)
        if (arg.status = "completed") {

            var data = JSON.stringify({
                "fileurl":props.fileurl
            });
            
            let response = await fetch('https://mfilesdssapi.techedge.dev/api/Values/Sign',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:data

            })

            if (response.status == 200){
                props.setLoading(false)
                props.checkSigning()
            }   
        }
    }
    let hideItems=()=>{
        var pdfViewer = document.getElementById('previewer2').ej2_instances[0];
        pdfViewer.toolbar.showToolbarItem(new Array("DownloadOption"), false);
        pdfViewer.toolbar.showToolbarItem(new Array("OpenOption"), false);
        pdfViewer.toolbar.showToolbarItem(new Array("PrintOption"), false);
        pdfViewer.toolbar.showToolbarItem(new Array("AnnotationEditTool"), false);
     
    }
    useEffect(()=>{
        hideItems()
    }, )
    
    return (
        // https://ej2services.syncfusion.com/production/web-services/api/pdfviewer
     <>
            <div className='control-section App-previewer'>
            {/* Render the PDF Viewer */}
            <PdfViewerComponent id="previewer2" documentPath={props.fileurl} serviceUrl="https://mfilesdsspreviewer.techedge.dev/api/pdfviewer" style={{ 'height': '640px' }} enableFormDesigner={false} downloadEnd={documentLoad}>
                <Inject services={
                    [
                        Toolbar, 
                        Magnification, 
                        Navigation, 
                        LinkAnnotation, 
                        BookmarkView, 
                        ThumbnailView, 
                        Print, 
                        TextSelection, 
                        TextSearch, 
                        Annotation, 
                        FormFields, 
                        FormDesigner
                    ]
                }/>
            </PdfViewerComponent>
        </div>
     </>

    );
}

export default Previewer