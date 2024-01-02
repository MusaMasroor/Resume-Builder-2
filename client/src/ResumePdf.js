import React from "react";
import { useResume } from "./ResumeContext";
import RandomUser from "./img/random-user.png";
import LinkedIn from "../src/img/linkedin.png";
import Gmail from "../src/img/gmail.png";

import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const ResumePdf = () => {
  const { resumeContent } = useResume();
  const { selectedPhoto } = useResume();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
    },
    sectionLeft: {
      width: 140,
      margin: 5,
      padding: 20,
    },
    sectionRight: {
      flex: 1,
      margin: 5,
      padding: 20,
    },

    justifyBtw: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
    line: {
      width: 90,
      height: 1,
      backgroundColor: "#a0aec0",
      marginTop: 13,
      marginBottom: 13,
    },
    profile: {
      width: 67,
      height: 67,
      borderRadius: 9999,
    },
    icon: {
      width: 15,
      height: 15,
    },
    linkContainer: {
      flexDirection: "row",
    },
    name: {
      fontSize: 17,
      fontWeight: "extrabold",
      marginTop: 10,
    },
    occupation: {
      fontSize: 10,
      marginBottom: 10,
    },

    heading: {
      fontSize: 14,
      fontWeight: 700,
      marginTop: 10,
      marginBottom: 10,
    },
    subHeading: {
      fontSize: 11,
      fontWeight: 700,
      marginTop: 10,
      marginBottom: 10,
      width: 150,
    },
    education2: {
      fontSize: 11,
      fontWeight: 700,
      marginTop: 10,
      marginBottom: 10,
      width: 175,
    },

    listItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 7,
    },
    bullet: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      backgroundColor: "black",
      marginRight: 5,
    },
    listItemText: {
      fontSize: 9,
      fontWeight: "light",
      marginBottom: 4,
    },
    about: {
      top: 5,
      fontSize: 8,
      fontWeight: 100,
      color: "#333",
    },
    link: {
      fontWeight: "light",
      fontSize: 8,
      color: "black",
      textDecoration: "none",
    },
  });

  return (
    <PDFViewer width="100%" height="800px">
      <Document>
        <Page size="A4">
          <View style={styles.container}>
            <View style={styles.sectionLeft}>
              <View>
                <Image
                  src={selectedPhoto || RandomUser}
                  style={styles.profile}
                />
              </View>

              <Text style={styles.name}>
                {resumeContent.firstName} {resumeContent.lastName}
              </Text>
              <Text style={styles.occupation}>{resumeContent.occupation}</Text>
              <View style={styles.linkContainer}>
                <Image src={LinkedIn} style={styles.icon} />
                <Link style={styles.link} src="https://linkedIn.com">
                  {" "}
                  {resumeContent.link1}
                </Link>
              </View>
              <View style={styles.linkContainer}>
                <Image src={Gmail} style={styles.icon} />
                <Link style={styles.link} src="https://gmail.com">
                  {" "}
                  {resumeContent.link2}
                </Link>
              </View>
              <View style={styles.line}></View>
              <Text style={styles.about}>{resumeContent.about}</Text>
              <Text style={styles.heading}>Skills</Text>
              <Text style={styles.listItemText}>{resumeContent.skill1}</Text>
              <Text style={styles.listItemText}>{resumeContent.skill2}</Text>
              <Text style={styles.listItemText}>{resumeContent.skill3}</Text>
              <Text style={styles.listItemText}>{resumeContent.skill4}</Text>
              <Text style={styles.listItemText}>{resumeContent.skill4}</Text>
              <Text style={styles.listItemText}>{resumeContent.skill5}</Text>
              <Text style={styles.listItemText}>{resumeContent.skill6}</Text>
              <Text style={styles.listItemText}>{resumeContent.skill7}</Text>

              <Text style={styles.heading}>Languages</Text>
              <Text style={styles.listItemText}>{resumeContent.language1}</Text>
              <Text style={styles.listItemText}>{resumeContent.language2}</Text>
              <Text style={styles.listItemText}>{resumeContent.language3}</Text>
              <Text style={styles.heading}>References</Text>
              <Text style={styles.listItemText}>
                {resumeContent.reference1}
              </Text>
              <Text style={styles.listItemText}>
                {resumeContent.reference2}
              </Text>
              <Text style={styles.listItemText}>
                {resumeContent.reference3}
              </Text>
            </View>
            <View style={styles.sectionRight}>
              <Text style={styles.heading}>Education</Text>

              <View style={styles.justifyBtw}>
                <View style={styles.bullet}></View>
                <Text style={styles.subHeading}>{resumeContent.degree1}</Text>
                <Text style={styles.listItemText}>
                  {resumeContent.startDate1} - {resumeContent.endDate1},
                  {resumeContent.city1},{resumeContent.country1}
                </Text>
              </View>
              <Text style={styles.listItemText}>
                {resumeContent.university1}
              </Text>

              <View style={styles.justifyBtw}>
                <View style={styles.bullet}></View>
                <Text style={styles.education2}>{resumeContent.degree2}</Text>
                <Text style={styles.listItemText}>
                  {resumeContent.startDate2} - {resumeContent.endDate2},
                  {resumeContent.city2},{resumeContent.country2}
                </Text>
              </View>
              <Text style={styles.listItemText}>
                {resumeContent.university2}
              </Text>

              <Text style={styles.heading}>Experience</Text>
              <View style={styles.justifyBtw}>
                <Text style={styles.subHeading}> {resumeContent.job1}</Text>
                <Text style={styles.listItemText}>
                  {resumeContent.employer1} {resumeContent.startDate3} -{" "}
                  {resumeContent.endDate3}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement1}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement2}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement3}
                </Text>
              </View>

              <View style={styles.justifyBtw}>
                <Text style={styles.subHeading}> {resumeContent.job2}</Text>
                <Text style={styles.listItemText}>
                  {resumeContent.employer2} {resumeContent.startDate4} -{" "}
                  {resumeContent.endDate4}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement4}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement5}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement6}
                </Text>
              </View>

              <View style={styles.justifyBtw}>
                <Text style={styles.subHeading}> {resumeContent.job3}</Text>
                <Text style={styles.listItemText}>
                  {resumeContent.employer3} {resumeContent.startDate5} -{" "}
                  {resumeContent.endDate5}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement7}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement8}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement9}
                </Text>
              </View>

              <View style={styles.justifyBtw}>
                <Text style={styles.subHeading}> {resumeContent.job4}</Text>
                <Text style={styles.listItemText}>
                  {resumeContent.employer4} {resumeContent.startDate6} -{" "}
                  {resumeContent.endDate6}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement10}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement11}
                </Text>
              </View>
              <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.listItemText}>
                  {resumeContent.achievement12}
                </Text>
              </View>

              {/* Certifications */}
              <Text style={styles.heading}>Certifications</Text>
              <View style={styles.justifyBtw}>
                <View style={styles.listItem}>
                  <View style={styles.bullet}></View>
                  <Text style={styles.subHeading}>
                    {resumeContent.certificateName1}
                  </Text>
                </View>
                <Text style={styles.listItemText}>
                  {" "}
                  {resumeContent.startDate7} - {resumeContent.endDate7}
                </Text>
              </View>
              <Text style={styles.listItemText}>
                {resumeContent.schooleName1}
              </Text>

              <Text style={styles.listItemText}>
                {resumeContent.aboutDepartment1}
              </Text>

              <View style={styles.justifyBtw}>
                <View style={styles.listItem}>
                  <View style={styles.bullet}></View>
                  <Text style={styles.subHeading}>
                    {resumeContent.certificateName2}
                  </Text>
                </View>
                <Text style={styles.listItemText}>
                  {" "}
                  {resumeContent.startDate8} - {resumeContent.endDate8}
                </Text>
              </View>
              <Text style={styles.listItemText}>
                {resumeContent.schooleName2}
              </Text>

              <Text style={styles.listItemText}>
                {resumeContent.aboutDepartment2}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ResumePdf;
