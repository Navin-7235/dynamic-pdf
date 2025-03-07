import { PDFViewer,PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import axios from "axios";
import { useState,useEffect } from "react";


const App = () => {
 const [reportData,setReportData] = useState(null);
 const [loading,setLoading] = useState(true);
 useEffect(() => {
  axios.get('https://run.mocky.io/v3/4a95d1fb-a533-4f5e-88bb-f04a534e50b4')
    .then((res) => {
      
      setReportData(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching report data:', err);
      setLoading(false);
    });
}, []);
return(
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 40 }}>
      {loading ? (
        <p>Loading report data...</p>
      ) : (
        <>
          <div>
            {reportData && Object.keys(reportData).length > 0 ? (
              <PDFViewer style={{ width: 500, height: 500 }}>
                <MyDocument  data={reportData} />
              </PDFViewer>
            ) : (
              <p>No report data available</p>
            )}
          </div>

          <div>
            <PDFDownloadLink
              document={<MyDocument data={reportData}/>}
              fileName="inspection_report.pdf">
              {({ loading }) => (loading ? 'Loading report...' : 'Download Report')}
            </PDFDownloadLink>
          </div>
        </>
      )}
    </div>
)
};
export default App;
