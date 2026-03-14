// Exercício 10: Componente Tipado
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

interface ListaTarefasProps {
  tarefas: Tarefa[];
  onToggle: (id: number) => void;
}

export default function ListaTarefas({ tarefas, onToggle }: ListaTarefasProps) {
  const [filtro, setFiltro] = useState<"todas" | "pendentes" | "concluidas">("todas");
  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  return (
    <View style={styles.container}>
      {/* Botões de Filtro */}
      <View style={styles.filtrosContainer}>
        <TouchableOpacity onPress={() => setFiltro("todas")}>
          <Text style={filtro === "todas" ? styles.filtroAtivo : styles.filtroInativo}>Todas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFiltro("pendentes")}>
          <Text style={filtro === "pendentes" ? styles.filtroAtivo : styles.filtroInativo}>Pendentes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFiltro("concluidas")}>
          <Text style={filtro === "concluidas" ? styles.filtroAtivo : styles.filtroInativo}>Concluídas</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Tarefas */}
      {tarefasFiltradas.map(tarefa => (
        <TouchableOpacity 
          key={tarefa.id} 
          onPress={() => onToggle(tarefa.id)}
          style={styles.tarefaItem}
        >
          <Text style={tarefa.concluida ? styles.textoConcluido : styles.textoPendente}>
            {tarefa.titulo}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  filtrosContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  filtroAtivo: { fontWeight: 'bold', color: 'blue' },
  filtroInativo: { color: 'gray' },
  tarefaItem: { paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  textoConcluido: { textDecorationLine: 'line-through', color: 'gray' },
  textoPendente: { color: 'black' }
});