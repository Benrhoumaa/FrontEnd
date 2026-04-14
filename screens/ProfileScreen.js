import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import MetricCard from '../components/MetricCard';
import BMICalculator from '../components/BMICalculator';
import LifestyleSelector from '../components/LifestyleSelector';
import GoalSelector from '../components/GoalSelector';
import CustomButton from '../components/CustomButton';
import { globalStyles } from '../styles/gloablStyles';
import { COLORS } from '../constants/Theme';

const ProfileScreen = ({ onLogout }) => {
  const [weight] = useState('72.5 kg');
  const [height] = useState('178 cm');
  const [lifestyle, setLifestyle] = useState('active');
  const [goal, setGoal] = useState('muscle');

  const handleFinalize = () => {
    console.log('Profile finalized:', { lifestyle, goal });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a2a" />
      
      {/* Logout Button */}
      <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>← Logout</Text>
      </TouchableOpacity>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Header title="Clinical Vitality" />

        {/* Biological Profile Section */}
        <View style={globalStyles.section}>
          <Text style={globalStyles.sectionTitle}>Biological Profile</Text>
          <Text style={globalStyles.sectionSubtitle}>
            Precision metrics define your baseline. Every gram and centimeter matters for your vitality score.
          </Text>

          <View style={{ flexDirection: 'row', gap: 15, marginBottom: 25 }}>
            <MetricCard label="METRIC" name="Weight" value={weight} />
            <MetricCard label="METRIC" name="Height" value={height} />
          </View>

          <BMICalculator weight="72.5" height="178" />
        </View>

        {/* Lifestyle Baseline */}
        <View style={globalStyles.section}>
          <LifestyleSelector selected={lifestyle} onSelect={setLifestyle} />
        </View>

        {/* Performance Goals */}
        <View style={globalStyles.section}>
          <GoalSelector selected={goal} onSelect={setGoal} />
        </View>

        {/* Finalize Button */}
        <CustomButton 
          title="Finalize Profile" 
          onPress={handleFinalize}
          type="success"
          style={{ marginHorizontal: 20, marginBottom: 30 }}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  logoutText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProfileScreen;