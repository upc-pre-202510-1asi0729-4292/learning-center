import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {BaseFormComponent} from '../../../shared/components/base-form.component';
import {Course} from '../../model/course.entity';
import {FormsModule, NgForm} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput} from '@angular/material/input';

/**
 * Component for creating and editing course information.
 * Extends the BaseFormComponent to provide form functionality.
 */
@Component({
  selector: 'app-course-create-and-edit',
  imports: [
    MatFormField,
    FormsModule,
    MatButton,
    MatInput
  ],
  templateUrl: './course-create-and-edit.component.html',
  styleUrl: './course-create-and-edit.component.css'
})
export class CourseCreateAndEditComponent extends BaseFormComponent {
  /** The course object to be created or edited */
  @Input() course!: Course;

  /** Flag indicating whether the component is in edit mode */
  @Input() editMode: boolean = false;

  /** Event emitter that fires when a new course should be added */
  @Output() protected courseAddRequested = new EventEmitter<Course>();

  /** Event emitter that fires when an existing course should be updated */
  @Output() protected courseUpdateRequested = new EventEmitter<Course>();

  /** Event emitter that fires when the operation should be cancelled */
  @Output() protected cancelRequested = new EventEmitter<void>();

  /** Reference to the course form element */
  @ViewChild('courseForm', {static: false}) protected courseForm!: NgForm;

  /**
   * Initializes a new instance of the CourseCreateAndEditComponent.
   * Creates an empty Course object.
   */
  constructor() {
    super();
    this.course = new Course({});
  }

  /**
   * Resets the component state to its initial values.
   * Clears the course data, sets edit mode to false, and resets the form.
   */
  private resetEditState() {
    this.course = new Course({});
    this.editMode = false;
    this.courseForm.reset();
  }

  /**
   * Checks if the form is valid.
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  private isValid = () => this.courseForm.valid;

  /**
   * Checks if the component is in edit mode.
   * @returns {boolean} True if in edit mode, false otherwise.
   */
  protected isEditMode = (): boolean => this.editMode;

  /**
   * Handles form submission.
   * If the form is valid, emits either an update or add event based on edit mode.
   * Resets the component state after successful submission.
   */
  protected onSubmit() {
    if (this.isValid()) {
      let emitter = this.isEditMode() ? this.courseUpdateRequested : this.courseAddRequested;
      emitter.emit(this.course);
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  /**
   * Handles cancellation of the form operation.
   * Emits a cancel event and resets the component state.
   */
  protected onCancel() {
    this.cancelRequested.emit();
    this.resetEditState();
  }
}
