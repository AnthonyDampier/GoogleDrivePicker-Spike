import { useEffect, useState } from 'react';
import useDrivePicker from 'react-google-drive-picker'


function App() {
  const [openPicker, authResponse] = useDrivePicker(); 

  const [data, setData] = useState({});

  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    try{
      openPicker({
        clientId: "287088794527-3r75jpl5hluuldrp452pv1mcs0ccrtjs.apps.googleusercontent.com",
        developerKey: "AIzaSyBl9k0C5WcYn2COhFwXOuboZn1x87q1R-4",
        viewId: "DOCS",
        // token: token, // pass oauth token in case you already have one
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
  
        callbackFunction: (data) => {
          if (data.action === 'cancel') {
            console.log('User clicked cancel/close button')
          }
          console.log(data)
          setData(data);
        },
      })
    } catch (error){
      console.log(error);
    }
  }

  
  return (
    <div>
        <button onClick={() => handleOpenPicker()}>Open Picker</button>
        <p>{data.doc && JSON.stringify(data.docs)}</p>
        {
          data.docs?.map((i) => {
              <p>{JSON.stringify(i)}</p>
          })
        }
    </div>
  );
}

export default App;
