'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Plus, Pencil, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { ChildForm } from './forms/ChildForm';
import { Modal } from './ui/Modal';

export function ChildSelector() {
  const { children, setActiveChild, activeChild, updateChild, addChild } = useAppStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAddingChild, setIsAddingChild] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  // Function to scroll the active child into the middle
  const scrollToActiveChild = () => {
    if (!containerRef.current || !activeChild) return;

    const container = containerRef.current;
    const activeChildElement = container.querySelector(
      `[data-child-id="${activeChild.id}"]`
    );

    if (activeChildElement instanceof HTMLElement) {
      const containerWidth = container.offsetWidth;
      const childWidth = activeChildElement.offsetWidth;
      const childOffsetLeft = activeChildElement.offsetLeft;

      const scrollPosition = childOffsetLeft - containerWidth / 2 + childWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToActiveChild();
  }, [activeChild]);

  return (
    <>
      {/* Scrollable horizontal container */}
      <div
        ref={containerRef}
        className="relative flex items-center gap-4 overflow-hidden whitespace-nowrap scroll-smooth p-4"
      >
        {children.map((child) => (
          <motion.button
            key={child.id}
            data-child-id={child.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setActiveChild(child)}
            className={`p-0 themeborder1 bg-base-200 rounded-3xl shadow-none cursor-pointer hover:shadow-sm transition-shadow flex-shrink-0 relative
              ${activeChild?.id === child.id ? 'ring-2 ring-primary' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2">
              <div className="flex items-center gap-3">
                <img
                  src={child.avatar}
                  alt={child.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {activeChild?.id === child.id &&
                  <div>
                    <h3 className="font-semibold">{child.name}</h3>
                    <motion.span
                      key={child.points}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="text-sm text-primary font-medium"
                    >
                      {child.points} Points
                    </motion.span>
                  </div>
                }
              </div>
            </div>
            {activeChild?.id === child.id && (
              <div
                onClick={() => setIsEditing(true)}
                className="btn btn-circle btn-accent btn-sm flex-shrink-0 absolute -bottom-2 -left-2"
              >
                <Pencil className="w-4 h-4" />
              </div>

            )}
          </motion.button>
        ))}

        {/* Add Child Button */}
        <button
          onClick={() => setIsAddingChild(true)}
          className="btn btn-ghost btn-sm flex-shrink-0"
        >
          <Plus className="w-4 h-4" /> Add Child
        </button>
      </div>

      {/* Modal for Adding Child */}
      <Modal
        isOpen={isAddingChild}
        onClose={() => setIsAddingChild(false)}
      >
        <ChildForm
          onSubmit={(data) => {
            addChild(data);
            setIsAddingChild(false);
          }}
          onCancel={() => setIsAddingChild(false)}
        />
      </Modal>
      {activeChild && <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <ChildForm
          child={activeChild}
          onSubmit={(data) => {
            updateChild(activeChild.id, data);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      </Modal>}

    </>
  );
}
