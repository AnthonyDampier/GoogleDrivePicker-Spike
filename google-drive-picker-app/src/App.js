import { useEffect, useState } from 'react';
import useDrivePicker from 'react-google-drive-picker'


function App() {
  const [openPicker, authResponse] = useDrivePicker(); 

  const [data, setData] = useState({});

  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    try{
      openPicker({
        clientId: process.env.React_App_Client_Id,
        developerKey: process.env.React_App_Google_Cloud_API_Key,
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
