import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
    padding: 20,
    fontFamily: "Helvetica",
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
    letterSpacing: 0.5,
    lineHeight: 1.5,
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
    textAlign: "right",
  },
});

const MyDocumentPDF = ({ invoice, email, carName, capacity, rent, total }) => (
  <Document>
    <Page size="A6" orientation="landscape" style={styles.page}>
      <View style={styles.header}>
        <Text>Binar Car Rental - Invoice</Text>
      </View>
      <View style={styles.body}>
        <Text>No. Invoice : {invoice}</Text>
        <Text>Email : {email}</Text>
        <Text>Car Type : {carName}</Text>
        <Text>Capacity : {capacity}</Text>
        <Text>Rent Date : {rent}</Text>
        <Text>Price : {total}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Copyright Binar {new Date().getFullYear()}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocumentPDF;
