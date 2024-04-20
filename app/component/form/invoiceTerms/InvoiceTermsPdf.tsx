import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import { pdfTypography, pdfContainers, pdfUtils } from "@/lib/pdfStyles";

export const InvoiceTermsPdf: React.FC<InvoiceTerms> = ({
  invoiceNumber,
  issueDate,
  dueDate,
}) => (
  <View style={pdfContainers.invoiceTerms}>
    <View style={{ flex: 1 }}>
      <Text style={pdfTypography.title}>Invoice NO</Text>
      <Text style={pdfTypography.subTitle}>{invoiceNumber}</Text>
    </View>
    <View
      style={{
        ...pdfUtils.flexRowItemSpaceAround,
        paddingHorizontal: 40,
        flex: 1,
      }}
    >
      <View>
        <Text style={pdfTypography.title}>Issued</Text>
        <Text style={pdfTypography.subTitle}>
          {issueDate ? format(issueDate, "M/d/yy") : ""}
        </Text>
      </View>
      <View>
        <Text style={pdfTypography.title}>Due Date</Text>
        <Text style={pdfTypography.subTitle}>
          {dueDate ? format(dueDate, "M/d/yy") : ""}
        </Text>
      </View>
    </View>
  </View>
);