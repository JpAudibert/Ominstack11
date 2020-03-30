import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> 0 casos</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <View style={styles.incidentsList}>
        <View style={styles.incident}>
          <Text style={styles.incidenProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>Abapa</Text>

          <Text style={styles.incidenProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>CAchorro</Text>

          <Text style={styles.incidenProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>R$ 120.00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View>
        <View style={styles.incident}>
          <Text style={styles.incidenProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>Abapa</Text>

          <Text style={styles.incidenProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>CAchorro</Text>

          <Text style={styles.incidenProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>R$ 120.00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View>
        <View style={styles.incident}>
          <Text style={styles.incidenProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>Abapa</Text>

          <Text style={styles.incidenProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>CAchorro</Text>

          <Text style={styles.incidenProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>R$ 120.00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}> Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
