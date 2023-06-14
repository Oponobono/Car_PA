import React from "react";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
const Swal = require("sweetalert2");

export default function VehicleFormScreen() {
  const [isError, setIserror] = useState(false);
  const [message, setMessage] = useState("");
  const [idsearch, setIdsearch] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      placa: "",
      marca: "",
      estado: "",
      valordiario: "",
    },
  });

  const onSubmit = async (data) => {
    const { placa, marca, estado, valordiario } = data;
    try {
      const response = await axios.post(`http://127.0.0.1:3000/api/carros`, {
        placa,
        marca,
        estado,
        valordiario,
      });
      Swal.fire({
        icon: 'success',
        title: 'Vehiculo registrado exitosamente!',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error);
    } finally {
      //setLoading(false);
    }
    console.log(data); // Aquí puedes realizar el registro de los datos en tu backend o almacenamiento local
    reset();
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Número de Placa"
            mode="outlined"
            left={<TextInput.Icon icon="account" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="placa"
      />
      {errors.placa && (
        <Text style={{ color: "red" }}>La placa es obligatoria.</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Marca"
            mode="outlined"
            left={<TextInput.Icon icon="account" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="marca"
      />
      {errors.marca && (
        <Text style={{ color: "red" }}>
          La marca del vehiculo es obligatoria.
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Estado"
            mode="outlined"
            left={<TextInput.Icon icon="account" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="estado"
      />
      {errors.estado && (
        <Text style={{ color: "red" }}>
          Es indispensable indicar la disponibilidad del vehiculo.
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Costo de Renta Diario"
            mode="outlined"
            left={<TextInput.Icon icon="account" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="valordiario"
      />
      {errors.valordiario && (
        <Text style={{ color: "red" }}>
          Indique cual será el costo de renta por día.
        </Text>
      )}

      <Button
        icon="view-list"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ backgroundColor: "green" }}
      >
        Agregar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
