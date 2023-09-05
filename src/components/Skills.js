import React, { useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [editingSkill, setEditingSkill] = useState(null);

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      const newSkills = [...skills, { id: Date.now(), name: newSkill }];
      setSkills(newSkills);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (id) => {
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    setSkills(updatedSkills);
  };

  const handleEditSkill = (id) => {
    const skillToEdit = skills.find((skill) => skill.id === id);
    if (skillToEdit) {
      setEditingSkill(skillToEdit);
      setNewSkill(skillToEdit.name);
    }
  };

  const handleUpdateSkill = () => {
    if (editingSkill) {
      const updatedSkills = skills.map((skill) =>
        skill.id === editingSkill.id ? { ...skill, name: newSkill } : skill
      );
      setSkills(updatedSkills);
      setEditingSkill(null);
      setNewSkill('');
    }
  };

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name}
            <button onClick={() => handleEditSkill(skill.id)}>Edit</button>
            <button onClick={() => handleDeleteSkill(skill.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={handleAddSkill}>Add</button>
        {editingSkill && (
          <>
            <button onClick={handleUpdateSkill}>Update</button>
            <button onClick={() => setEditingSkill(null)}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
