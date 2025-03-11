import { PDFViewer,PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import axios from "axios";
import { useState,useEffect } from "react";


const App = () => {
 const [reportData,setReportData] = useState(null);
 const [loading,setLoading] = useState(true);
 const [error,setError] = useState(null);
 useEffect(() => {
  const fetchReportData = async () => {
    try{
      const  res = await axios.get('https://run.mocky.io/v3/db43c39a-8b01-4ca5-906e-c9ab22658239');
      if(res.data && Object.keys(res.data).length > 0 ){
        setReportData(res.data)
      }
      else{
        setError('No report Data Available');
      }
    }
    catch(err) {
      console.error('Error fecting report data',err);
      setError('Failed to fetch report data. Please try again later .');
    }
    finally{
      setLoading(false);
    }
  };
  fetchReportData();
 }, []);

return(
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 40 }}>
      {loading ? (
        <p>Loading report data...</p>
      ) : error ? ( <p style={{color:'red'}}>{error}</p>
        
       ):(
        <>
          <div>
             <PDFViewer style={{ width: 500, height: 500 }}>
                <MyDocument  data={reportData} />
              </PDFViewer>
           </div>

          <div>
            <PDFDownloadLink
              document={<MyDocument data={reportData}/>}
              fileName="inspection_report.pdf">
              {({ loading }) => (loading ? 'preparing report...' : 'Download Report')}
            </PDFDownloadLink>
          </div>
        </>
      )}
    </div>
)
};
export default App;
