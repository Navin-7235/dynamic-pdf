import { Page, View, Text, StyleSheet, Image, Document } from "@react-pdf/renderer";


const styles = StyleSheet.create({
    page: { padding: 20, fontFamily: 'Times-Roman', position: 'relative', },
    section: { display: 'flex', alignItems: 'center' },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderBottomStyle: 'solid',
        width: 530,
        marginBottom: 3
    },
    sec: { marginBottom: 10 },
    text: { fontSize: 12 },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 14,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderBottomStyle: 'solid',
        paddingBottom: 5,
        paddingLeft: 20,
    },
    footer: {
        textAlign: 'right',
        fontSize: 10,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        borderTopWidth: 1,
        borderTopColor: 'black',
        borderTopStyle: 'solid',
        paddingTop: 5,
        zIndex: 0,
    },
    watermark: {
        position: 'absolute',
        width: '100%',
        opacity: 0.9,
        zIndex: -1,

    },
    para: { textAlign: 'justify', margin: '0 auto', fontSize: 12, width: '90%', lineHeight: 1.5, },
    parahead: { fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 }
});

const Header = ({ reportNo }) => (
    <View style={styles.header}>
        <Text style={{ fontSize: 12, }}>Report- {reportNo}</Text>
        <Image style={{ width: 130 }} src="images/SolinaHeader.png" />
    </View>
);

const Footer = () => (
    <View style={styles.footer}>
        <Text style={{ marginTop: 8, marginRight: 30 }} render={({ pageNumber }) => `Page No:- ${pageNumber}`} />
    </View>
);

const WaterMark = () => (
    <View style={styles.watermark}>
        <Image src="images/waterMarkSolinas (2).png" cache={true} />
    </View>
)



function MyDocument({ data }) {
    if (!data) {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text>No report data</Text>
                </Page>
            </Document>
        );
    }
    const tableData = [
        ["Date", data.date, "Site number", data.siteNumber],
        ["Location", data.location, "Direction", data.direction],
        ["Age of pipeline", data.ageOfPipeline, "Type of Pipeline", data.pipelineType],
        ["Pipeline Material", data.pipelineMaterial, "Pipeline Diameter", data.pipelineDiameter],
        ["GPS Co-ordinates", data.gpsCoordinates, "Inspection Length", data.inspectionLength],
    ];

    const pages = [

        <Page size="A4" style={styles.page} key={1}>
            <WaterMark />
            <View style={styles.section}>
                <View style={styles.border} />
            </View>
            <View>
                <Text style={{ textAlign: 'right', marginBottom: 120, marginRight: 20 }}>Report - {data.reportNo}</Text>
                <View style={{ textAlign: 'right', marginBottom: 120, fontSize: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Solinas Integrity Private Ltd.</Text>
                    <Text >
                        {"{Water Pipeline/Manhole and Sewer}"} <Text style={{ fontWeight: 'bold' }}>Inspection</Text>
                    </Text>
                </View>
                <View style={{ textAlign: 'right', marginBottom: 100 }}>
                    <Text style={{ fontSize: 16 }}>Prepared for</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{data.customer}</Text>
                </View>
                <View style={{ textAlign: 'right', fontSize: 14, marginBottom: 80 }}>
                    <Text style={{ marginBottom: 2 }}>{data.site}</Text>
                    <Text>{data.date}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10, marginTop: 80 }}>
                    <Image style={{ width: 130, height: 20 }} src="images/SolinaHeader.png" />
                </View>
                <View>
                    <Text style={{ textAlign: 'right', fontSize: 12, }}>
                        D305, Solinas Integrity Pvt. Ltd,{"\n"}
                        C/O IITM Incubation Cell,{"\n"}
                        Kanagam Road, Taramani,{"\n"}
                        Chennai - 600113, Tamil Nadu
                    </Text>
                </View>
            </View>


        </Page>,

        <Page style={styles.page} key={2}>
            <WaterMark />
            <Image style={styles.watermark} src="images/waterMark.png" />
            <Header reportNo={data.reportNo} />
            <View style={styles.parahead}>
                <Text style={{ marginTop: 10 }}>NOTICE</Text>
            </View>
            <View style={styles.para}>
                <Text style={{ marginTop: 10 }}>
                    The information contained in this report is provided for interpretation by a suitably qualified civil engineering 
                    professional engaged by the Client presented. This report is not intended and must not be
                    taken as professional civil engineering advice, nor shall it be relied upon as a substitute for professional
                    civil engineering advice. Interpretation of this report, evaluation of the pipelines, and any rehabilitation,
                    investigative, cleaning, or other decisions are the sole responsibility of the Client. Certain information
                    contained in this report such as distances and dimensions may incorporate information provided by others.
                    The information may not always be accurate and complete. The engineer should make their own assessments regarding 
                    such information. The information contained in this document may be confidential. It
                    is intended only for the use of the Client. However, any disclosure, reproduction, distribution, or other
                    dissemination or use of the information contained in this document is not to be done to other parties
                    without the written consent of Solinas Integrity Private Limited.
                </Text>
            </View>
            <View style={styles.parahead}>
                <Text style={{ marginTop: 15 }}>EXECUTIVE SUMMARY</Text>
            </View>
            <View style={styles.para}>
                <Text style={{ marginBottom: 10, }}>
                    Solinas Inspection Service provides pipeline solution that comes with the dashboard that helps
                    tracking, maintaining, and analysing the information. It has features that helps in planning for the
                    inspections (Inspection Management), tracking the status of the issue (resolved/unresolved),
                    generating reports for any given period and Geographic Information System which helps us in
                    visualising the overall problem.
                </Text>
                <Text style={{ marginBottom: 10 }}>Our solution is used for internal condition assessment and defect detection in pipelines that
                    characterizes and pinpoints the location of defects along with analytics so that asset managers can
                    take preventive maintenance actions thereby reducing losses. We detect critical defects leading to
                    the pipeline leakage and perform overall internal condition assessment to identify wall defects,
                    encrustations and unidentified objects and their locations, for corresponding corrective actions to be
                    taken at specified sections of pipeline minimal digging of the roads.</Text>
                <Text style={{ marginBottom: 10 }}>
                    We would like to thank Brihanmumbai Municipal Corporation for its unconditional support. We
                    would like to thank the various staff for their continued assistance during the various phases of the
                    inspection work, without your support such a challenging work could not have been possible.
                </Text>
            </View>
            <View style={styles.parahead} >
                <Text>INSPECTION PROCEDURE</Text>
            </View>
            <View style={styles.para}>
                <Text><Text style={{ fontWeight: 'bold' }}>Pre-inspection – site preparation:</Text> Access point in the pipeline is opened and the pipelines are
                    dewatered. Equipment and tools were transported to the site location to perform the inspection with
                    the help of <Text style={{ fontWeight: 'bold' }}>{data.customer}</Text>. Considering the sizes of the pipeline and the
                    space available for insertion of the tools, cameras were chosen to perform the inline video
                    inspection. Safety precautions were taken after thorough preliminary study of the subject to
                    perform the inspection safely.</Text>
            </View>

            <Footer />
        </Page>,

        <Page style={styles.page} key={3}>
            <WaterMark />
            <Header reportNo={data.reportNo} />
            <View style={[styles.para, { marginTop: 10 }]}>
                <Text><Text style={{ fontWeight: 'bold' }}>Installation of inspection equipment:</Text> Once the site was prepared for inspection, it was handed
                    over to Solinas team for installing the inspection equipment.</Text>
            </View>
            <View style={{ textAlign: "left", fontSize: 12, width: '90%', margin: '0 auto', marginBottom: 5 }}>
                <Text>Inspection Equipment:</Text>
            </View>
            <View style={{ fontSize: 12, textAlign: 'justify', width: '90%', margin: '0 auto', lineHeight: 1.5, padding: 15, }}>
                <Text>•    Video Cameras with DVR</Text>
                <Text>•    Endobot/Endoscopy and Other Mechanical Tools</Text>
                <Text>•    Personal Protective Equipment (PPE)</Text>
            </View>
            <View style={styles.para}>
                <Text>
                    <Text style={{ fontWeight: 'bold' }}>Inspection:</Text> The Endobot/endoscopy was inserted into the pipeline through an opening, remotely
                    controlled with the help of a tether. The equipment was driven inside the pipeline through
                    controlled manual-feed or remote in case of Endobot. The live video feed from the camera is
                    obtained at the base station. The feedback is used to identify and locate the critical spots in the
                    pipeline. The locations of the defects were recorded and this data is provided immediately for
                    precise localization of the defects/features identified.
                </Text>
            </View>
            {Array.isArray(data.Recommandation) && data.Recommandation.length > 0 && (
                <>
                    <View style={styles.parahead}>
                        <Text>KEY RECOMMENDATIONS:</Text>
                    </View>
                    <View style={{ fontSize: 12, width: '90%', lineHeight: 1.5, margin: '0 auto', padding: 10 }}>
                        {data.Recommandation.map((rec, index) => (
                            <Text key={index}>• {rec.trim()}</Text>
                        ))}
                    </View>
                </>
            )}


            <View style={styles.parahead}>
                <Text>Pipeline Grading</Text>
            </View>
            <View style={styles.para}>
                <Text>
                    Pipeline grading refers to the process of evaluating and rating the condition of a pipeline, usually
                    for the purpose of determining its integrity and remaining service life. It depends on the type and
                    age of the pipeline, the material it is made of, and the purpose of the inspection. Once the internal
                    conditional assessment is performed using Endobot, the severity grade for each defect is mapped
                    using the bellow mentioned parameters (refer the table) and the results are used to assess the overall
                    condition of the pipeline and determine any necessary repairs or maintenance.
                </Text>
            </View>
            <View style={{ textAlign: 'center', margin: '0 auto', width: '90%', marginTop: 15 }}>
                <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black' }}>
                    <Text style={{ flex: 1, fontSize: 12, fontWeight: 'bold', padding: 5, borderRightWidth: 1, borderColor: 'black' }}>
                        Severity Grade
                    </Text>
                    <Text style={{ flex: 2, fontSize: 12, fontWeight: 'bold', padding: 5, borderRightWidth: 1, borderColor: 'black' }}>
                        Description of Condition
                    </Text>
                    <Text style={{ flex: 3, fontSize: 12, fontWeight: 'bold', padding: 5 }}>
                        Estimated Time to Failure
                    </Text>
                </View>
                {[
                    ['1', 'Pipe segment has minor defects', 'Failure unlikely in the foreseeable future'],
                    ['2', 'Pipe segment has minor defects', 'Pipe unlikely to fail for at least 7 years'],
                    ['3', 'Pipe segment has moderate defects', 'Deterioration may continue, at 3–5-year timeframe'],
                    ['4', 'Pipe segment has severe defects', 'Risk of failure within the next 2 years'],
                    ['5', 'Requires immediate attention', 'Pipe segment has failed/will likely fail immediately']
                ].map((row, index) => (
                    <View key={index} style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderTopWidth: 0 }}>
                        <Text style={{ flex: 1, fontSize: 11, padding: 5, borderRightWidth: 1, borderColor: 'black', textAlign: 'center' }}>
                            {row[0]}
                        </Text>
                        <Text style={{ flex: 2, fontSize: 11, padding: 5, borderRightWidth: 1, borderColor: 'black', textAlign: 'left' }}>
                            {row[1]}
                        </Text>
                        <Text style={{ flex: 3, fontSize: 11, padding: 4, textAlign: 'left' }}>
                            {row[2]}
                        </Text>
                    </View>
                ))}
            </View>

            <Footer />
        </Page>,

        <Page style={styles.page} key={4}>
            <WaterMark/>
            <Header reportNo={data.reportNo} />
            <View style={styles.parahead}>
                <Text style={{ marginTop: 15 }}>Risk Analysis</Text>
            </View>
            <View style={styles.para}>
                <Text style={{ marginBottom: 10 }}>
                    Risk analysis is done to each section of pipeline being inspected; it is done with the help of the
                    below-mentioned matrix. Initially with all the defects and the condition of the pipeline the
                    probability of failure is calculated.<Text style={{ fontWeight: 'bold' }}>Probability of failure (POF)</Text> refers to the likelihood that a
                    particular component or system will fail to perform its intended function. Later, the consequence of
                    the failure is calculated.<Text style={{ fontWeight: 'bold' }}>Consequence of failure (COF)</Text> refers to the potential impact or outcome of
                    a failure of a particular component or system.
                </Text>
            </View>
            <View style={{ width: '90%', margin: '0 auto' }}>
                <Image src="images/RiskChart.png" />
            </View>
            <View style={styles.para}>
                <Text style={{ marginTop: 15, marginBottom: 15 }}><Text style={{ fontWeight: 'bold' }}>Risk rating </Text>
                    is a process of evaluating and assigning a numerical or qualitative value to the risks
                    associated with a particular component or system. It is done her by multiplying the value of POF
                    and COF. It has numerical values ranging from 1 to 25.
                </Text>
            </View>
            <View style={{ width: '90%', textAlign: 'justify', paddingLeft: 20, fontSize: 12, lineHeight: 1.5, margin: '0 auto', marginBottom: 10 }}>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', }}>High risk (Red):</Text> These have a high likelihood of occurring and/or a high potential impact.
                    These risks are considered the most significant and may require immediate attention or
                    urgent risk management action. Anything equal to or above 10 is considered as high risk.
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Medium risk (Blue):</Text> These have a moderate likelihood of occurring and/or a moderate
                    potential impact. These risks may require some level of risk management action, but may not
                    be as urgent as high-risk. Anything equal to or above 5 and below 10 is considered as
                    medium risk.
                </Text>
                <Text>
                    <Text style={{ fontWeight: 'bold' }}>Low risk (White):</Text> These have a low likelihood of occurring and/or a low potential impact.
                    These risks are considered the least significant and may not require immediate risk
                    management action. Anything below 5 is considered as low risk.
                </Text>
            </View>
            <View style={styles.para}>
                <Text>
                    Overall, the goal of risk analysis in pipelines is to identify and assess the potential risks and hazards
                    associated with the pipeline and its operation, and to implement strategies to minimize or eliminate
                    those risks. This helps ensure the safe and reliable operation of the pipeline and protect the
                    personnel and the environment.
                </Text>
            </View>

            <Footer />
        </Page>,

        <Page style={styles.page} key={5}>
            <WaterMark />
            <Header reportNo={data.reportNo} />
            <View style={styles.parahead}>

            </View>
            <View style={{ width: '90%', borderStyle: "solid", fontSize: 11, margin: '0 auto', marginTop: 10, marginBottom: 10 }}>
                {tableData.map((row, index) => (
                    <View key={index} style={{ flexDirection: 'row' }}>
                        {row.map((cell, cellIndex) => (
                            <Text key={cellIndex} style={{ flex: 1, borderStyle: 'solid', borderWidth: 1, padding: 5, textAlign: cellIndex % 2 === 0 ? 'left' : 'center' }}>{cell}</Text>
                        ))}
                    </View>
                ))}
            </View>
            <View style={styles.parahead}>
                <Text>GIS Mapping</Text>
            </View>
            <View style={{ width: '90%', margin: '0 auto', marginBottom: 10, marginTop: 10 }}>
                <Image src={data.Gisimage} />
            </View>
            <View style={styles.parahead}>
                <Text>Risk Analysis of this pipeline</Text>
            </View>
            <View style={{ display: 'table', width: '90%', border: '1px solid black', margin: '0 auto' }}>
                <View style={{ flexDirection: 'row', borderBottom: "1px solid black", fontSize: 11 }}>
                    <Text style={{ flex: 1, padding: 5, borderRight: '1px solid black' }}>Risk Rating</Text>
                    <Text style={{ flex: 1, padding: 5, borderRight: '1px solid black' }}>{data.Rating}</Text>
                    <Text style={{ flex: 1, padding: 5, borderRight: '1px solid black' }}>Risk Category</Text>
                    <Text style={{ flex: 1, padding: 5, borderRight: '1px solid black' }}>{data.Category}</Text>
                </View>
            </View>
            <View style={{ display: 'table', width: '90%', border: '1px solid black', margin: '0 auto' }}>
                <Text style={{ padding: 5, fontSize: 11 }}>Description on Major findings:{"\n\n"}</Text>
                <Text style={{ padding: 5, fontSize: 11 }}>{data.Description}</Text>

            </View>

            <Footer />
        </Page>
    ];

    const getDescriptionSpacing = (description) => {
        if (!description) return { marginTop: 40 };
        const lineCount = description.length / 100;
        if (lineCount > 3) {
            return { marginTop: 15 };
        }
        return { marginTop: 20 };
    };
    
    const defectPages = (data.Defectimage && Array.isArray(data.Defectimage) && data.Defectimage.length > 0)
        ? data.Defectimage.reduce((acc, image, index) => {
            try {
                const currentDefectNo = data.DefectNo?.[index] ?? "N/A";
                const imageUrl = image;
    
                
    
                if (index % 2 === 0) {
                    acc.push(
                        <Page style={styles.page} key={`defect-page-${index}`}>
                            <WaterMark />
                            <Header reportNo={data.reportNo ?? "N/A"} />
                            <View style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>
                                <Text style={{ marginTop: 1 }}>Defect - {currentDefectNo}</Text>
                            </View>
                            <View style={{ width: '90%', height: '30%', margin: '0 auto' }}>
                                <Image src={imageUrl ?? "No image Avialble"} alt={`Defect image ${index}`} />
                            </View>
                            <View style={{ display: 'table', width: '90%', border: '1px solid black', margin: '0 auto', ...getDescriptionSpacing(data.Description?.[index]) }}>
                                <View style={{ flexDirection: 'row', fontSize: 11, textAlign: 'center' }}>
                                    <Text style={{ flex: 1, borderRight: '1px solid black' }}>Distance</Text>
                                    <Text style={{ flex: 1, borderRight: '1px solid black' }}>{data.distance?.[index] ?? "N/A"}</Text>
                                    <Text style={{ flex: 2, borderRight: '1px solid black' }}>Defect Code</Text>
                                    <Text style={{ flex: 1, borderRight: '1px solid black' }}>{data.DefectCode?.[index] ?? "N/A"}</Text>
                                    <Text style={{ flex: 2, borderRight: '1px solid black' }}>Severity Grade</Text>
                                    <Text style={{ flex: 1 }}>{data.Severitygrade?.[index] ?? "N/A"}</Text>
                                </View>
                            </View>
                            <View style={{ width: '90%', margin: '0 auto', fontSize: 11, border: '1px solid black' }}>
                                <Text style={{ padding: 5 }}>Description{"\n"}</Text>
                                <Text style={{ padding: 5 }}>{data.Description?.[index] ?? ""}</Text>
                            </View>
                            {data.Defectimage?.[index + 1] && (
                                <>
                                    <View style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>
                                        <Text style={{ marginTop: 5 }}>Defect - {data.DefectNo?.[index + 1] ?? "N/A"}</Text>
                                    </View>
                                    <View style={{ width: '90%', height: '30%', margin: '0 auto' }}>
                                        <Image src={data.Defectimage[index + 1] ?? "No image Avialble"} alt={`Defect image ${index + 1}`} />
                                    </View>
                                    <View style={{ display: 'table', width: '90%', border: '1px solid black', margin: '0 auto', ...getDescriptionSpacing(data.Description?.[index + 1]) }}>
                                        <View style={{ flexDirection: 'row', fontSize: 11, textAlign: 'center' }}>
                                            <Text style={{ flex: 1, borderRight: '1px solid black' }}>Distance</Text>
                                            <Text style={{ flex: 1, borderRight: '1px solid black' }}>{data.distance?.[index + 1] ?? "N/A"}</Text>
                                            <Text style={{ flex: 2, borderRight: '1px solid black' }}>Defect Code</Text>
                                            <Text style={{ flex: 1, borderRight: '1px solid black' }}>{data.DefectCode?.[index + 1] ?? "N/A"}</Text>
                                            <Text style={{ flex: 2, borderRight: '1px solid black' }}>Severity Grade</Text>
                                            <Text style={{ flex: 1 }}>{data.Severitygrade?.[index + 1] ?? "N/A"}</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '90%', margin: '0 auto', fontSize: 11, border: '1px solid black' }}>
                                        <Text style={{ padding: 5 }}>Description{"\n"}</Text>
                                        <Text style={{ padding: 5 }}>{data.Description?.[index + 1] ?? ""}</Text>
                                    </View>
                                </>
                            )}
                            <Footer />
                        </Page>
                    );
                }
            } catch (error) {
                console.error(`Error generating defect page for index ${index}:`, error);
            }
            return acc;
        }, [])
        : [];
    
    const allPages = [...pages, ...defectPages];
    
    return (
        <Document>
            {allPages}
        </Document>
    );
}

export default MyDocument;