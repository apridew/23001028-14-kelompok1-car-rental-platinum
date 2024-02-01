import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
    fontFamily: "Times-Roman",
  },
  header: {
    marginTop: 10,
    padding: 10,
    height: "auto",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: 5,
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
    fontSize: 20,
  },
  body: {
    marginTop: 10,
    padding: 10,
    height: "auto",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: 5,
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
    fontSize: 12,
  },
  footer: {
    marginTop: 10,
    padding: 10,
    height: "auto",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: 5,
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
    fontSize: 10,
  },
});

const MyDocumentPDF = ({ invoice, email, carName, capacity, rent, total }) => (
  <Document>
    <Page size="A6" orientation="landscape" style={styles.page}>
      <View style={styles.header}>
        <Text>Binar Car Rental</Text>
      </View>
      <View style={styles.body}>
        <Text>Nomor Invoice : {invoice}</Text>
        <Text>Email : {email}</Text>
        <Text>Mobil : {carName}</Text>
        <Text>Kapasitas : {capacity}</Text>
        <Text>Periode Sewa : {rent}</Text>
        <Text>Harga : {total}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Copyright Binar 2024</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocumentPDF;
